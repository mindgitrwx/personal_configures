#Q1
#rbinom(n, N, p)
N <- c(1, 5, 10, 50)
p <- c(0.2, 0.5, 0.8)
n <- c(10, 50, 100)
nrep <- 10^4
k = 1 # (n = 10)
par(mfrow = c(4, 3))
for(i in 1:4){
for(j in 1:3){
D <- rbinom(n[k]*nrep,N[i],p[j])
X <- matrix(D,nrep,n[k])
Y <- apply(X,1,mean)
hist(Y, main = paste(c("N=", "p=", "n="), c(N[i], p[j], n[k]), collapse=", "))
}
}
k = 2 # (n = 50)
par(mfrow = c(4, 3))
for(i in 1:4){
for(j in 1:3){
D <- rbinom(n[k]*nrep, N[i], p[j])
X <- matrix(D, nrep, n[k])
Y <- apply(X, 1, mean)
hist(Y, main = paste(c("N=", "p=", "n="), c(N[i], p[j], n[k]), collapse=", "))
}
}
k = 3 # (n = 100)
par(mfrow = c(4, 3))
for(i in 1:4){
for(j in 1:3){
D <- rbinom(n[k]*nrep, N[i], p[j])
X <- matrix(D, nrep, n[k])
Y <- apply(X, 1, mean)
hist(Y, main = paste(c("N=", "p=", "n="), c(N[i], p[j], n[k]), collapse=", "))
}
}
(1) n = 10
(2) n = 50
(3) n = 100
#Q2
N <- c(1, 5, 10, 50)
p <- c(0.2, 0.5, 0.8)
n <- c(10, 50, 100)
nrep <- 10^4
M <- EX <- array(0, c(4, 3, 3))
S <- SDX<- array(0, c(4, 3, 3))
for(k in 1:3){
for(i in 1:4){
for(j in 1:3){
D <- rbinom(n[k]*nrep, N[i], p[j])
X <- matrix(D, nrep, n[k])
Y <- apply(X, 1, mean)
M[i,j,k] <- mean(Y)
EX[i,j,k] <- N[i]*p[j]
S[i,j,k] <- sd(Y)
SDX[i,j,k] <- sqrt(N[i]*p[j]*(1-p[j])/n[k])
}
}
}
par(mfrow = c(1, 2))
plot(EX, M, xlab = "Theoretical EX", ylab = "Simulation EX")
abline(a = 0, b = 1)
plot(SDX, S, xlab = "Theoretical SD", ylab = "Simulation SD")
abline(a = 0, b = 1)
#Q3
y <- c(-3, -2, -1, 0, 1, 2, 3)
T <- NULL
for(n in 1:10^4){
x <- sample(y, n, replace=TRUE)
T[n] <- sqrt(n)*mean(x)/sd(y)
}
Zn <- cumsum(T)
plot(1:10^4, Zn, type = "l", xlab = "n")
#Q4
x <- runif(10^5)
x0 <- seq(mean(x)-0.1, mean(x)+0.1, 0.00001)
#(1)
f <- log
f1 <- function(x) 1/x # 1st derivative
f2 <- function(x) 1/x^2 # 2nd derivative
lhs <- var(f(x))
rhs <- var(x)*f1(x0)^2+var(x^2)*f2(x0)^2/4
wm <- which.min(abs(rhs-lhs))
round(x0[wm], 5)
[1] 0.44348
#(2)
f <- sqrt
f1 <- function(x) (1/2)*x^(-1/2)
f2 <- function(x) -(1/4)*x^(-3/2)
lhs <- var(f(x))
rhs <- var(x)*f1(x0)^2+var(x^2)*f2(x0)^2/4
wm <- which.min(abs(rhs-lhs))
round(x0[wm], 5)
alpha=beta=seq(0,1,0.01)
#------------------------
n <- c(10, 20, 50, 100)
p0 <- seq(0.05, 0.5, by=0.05)
nrep <- 1000
alpha <- 0.05
#Q1
CP1 <- AW1 <- matrix(0, length(p0), length(n))
for (i in 1:length(p0)){
for (j in 1:length(n)){
X <- sample(0:1, nrep*n[j], replace=TRUE, prob=c(1-p0[i],p0[i]))
X <- matrix(X,nrep,n[j])
M <- apply(X,1,mean)
C <- qnorm(1-alpha/2)*sqrt(M*(1-M)/n[j])
C1 <- pmax(0,M-C)
C2 <- pmin(1,M+C)
ci <- ((C1 < p0[i]) & (C2 > p0[i]))
CP1[i,j] <- mean(ci)
AW1[i,j] <- mean(C2-C1)
}
}
plot(p0, type="n", xlim=c(0,0.5), ylim=c(0,1), xlab="p0", ylab="Coverage Probability")
for (j in 1:length(n)) lines(p0, CP1[,j], type="l", col=j, lty=j)
legend(x="bottomright", legend=paste("n=",n), col=1:4, lty=1:4)
plot(p0,type

#Q2
nboot <- 500
CP2 <- AW2 <- matrix(0,length(p0),length(n))
for (i in 1:length(p0)){
for (j in 1:length(n)) {
nc <- 0
WI <- NULL
for (k in 1:nrep) {
X <- sample(0:1, n[j], replace=TRUE, prob=c(1-p0[i],p0[i]))
B <- X[ceiling(n[j]*runif(n[j]*nboot))]
B <- matrix(B,nboot,n[j])
M <- apply(B, 1, mean)
C <- c(quantile(M,0.025),quantile(M,0.975))
if ((C[1] < p0[i]) & (C[2] > p0[i])) nc <- nc+1
WI[k] <- quantile(M,0.975)-quantile(M,0.025)
}
CP2[i,j] <- nc/nrep
AW2[i,j] <- mean(WI)
}
}
plot(p0, type="n", xlim=c(0,0.5), ylim=c(0,1), xlab="p0", ylab="Coverage Probability")
for (j in 1:length(n)) lines(p0, CP2[,j], type="l", col=j, lty=j)
legend(x="bottomright", legend=paste("n=",n), col=1:4, lty=1:4)
plot(p0,type="n", xlim=c(0,0.5), ylim=c(0,1), xlab="p0", ylab="Average Width")
for (j in 1:length(n)) lines(p0, AW2[,j],type="l", col=j, lty=j)

#Q3
CP3 <- AW3 <- matrix(0, length(p0), length(n))
for (i in 1:length(p0)){
for (j in 1:length(n)) {
nc <- 0
WI <- NULL
for (k in 1:nrep) {
X <- sample(0:1, n[j], replace=TRUE, prob=c(1-p0[i], p0[i]))
B <- sample(0:1, nboot*n[j], replace=TRUE,
prob=c(1-mean(X), mean(X)))
B <- matrix(B, nboot, n[j])
M <- apply(B, 1, mean)
C <- c(quantile(M, 0.025), quantile(M, 0.975))
if ((C[1] < p0[i]) & (C[2] > p0[i])) nc <- nc+1
WI[k] <- quantile(M, 0.975)-quantile(M, 0.025)
}
CP3[i,j] <- nc/nrep
AW3[i,j] <- mean(WI)
}
}
plot(p0,type="n", xlim=c(0,0.5), ylim=c(0,1), xlab="p0", ylab="Coverage Probability")
for (j in 1:length(n)) lines(p0, CP3[,j],type="l", col=j, lty=j)
legend(x="bottomright", legend=paste("n=",n),col=1:4, lty=1:4)
plot(p0, type="n", xlim=c(0,0.5), ylim=c(0,1), xlab="p0", ylab="Average Width")
for (j in 1:length(n)) lines(p0, AW3[,j], type="l", col=j, lty=j)
legend(x="topright", legend=paste("n=",n), col=1:4, lty=1:4)

#------------------------
set.seed(12345)
X <- matrix(rnorm(1e4 * 10), 1e4, 10)
Y <- matrix(runif(1e4 * 10), 1e4, 10)
Z <- matrix(rnorm(1e4 * 10, sd=2), 1e4, 10)
bias.one <- bias.two <- var.one <- var.two <- mse.one <- mse.two <-
matrix(0,length(alpha),length(beta))
for(i in 1:length(alpha)){
 for(j in 1:(length(beta)-i+1)){
 T <- alpha[i]*X+beta[j]*Y+(1-alpha[i]-beta[j])*Z
 sigm.1.hat <- apply(T, 1, function(x) sqrt((1/9)*sum((x-mean(x))^2)))
 bias.one[i,j] <- (mean(sigm.1.hat)-1)^2
 var.one[i,j] <- var(sigm.1.hat)
 mse.one[i,j] <- mean((sigm.1.hat-1)^2)
 sigm.2.hat <- apply(T, 1, function(x) sqrt((1/10)*sum((x-mean(x))^2)))
 bias.two[i,j] <- (mean(sigm.2.hat) -1)^2
 var.two[i,j] <- var(sigm.2.hat)
 mse.two[i,j] <- mean((sigm.2.hat-1)^2)
 }
}

loc.bias.one <- which(bias.one == min(bias.one[bias.one>0]), arr.ind = TRUE)
alpha.bias.one <- alpha[loc.bias.one[1]]
[1] 0.53
beta.bias.one <- beta[loc.bias.one[2]]
[1] 0.03
bias.one[loc.bias.one[1],loc.bias.one[2]]
[1] 2.308886e-08
loc.bias.two <- which(bias.two == min(bias.two[bias.two>0]), arr.ind = TRUE)
alpha.bias.two <- alpha[loc.bias.two[1]]
[1] 0.46
beta.bias.two <- beta[loc.bias.two[2]]
[1] 0.05
bias.two[loc.bias.two[1],loc.bias.two[2]]
[1] 1.234839e-09

#(2)
loc.var.one <- which(var.one == min(var.one[var.one>0]), arr.ind = TRUE)
alpha.var.one <- alpha[loc.var.one[1]]
[1] 0.03
beta.var.one <- beta[loc.var.one[2]]
[1] 0.96
var.one[loc.var.one[1],loc.var.one[2]]
[1] 0.002175656
loc.var.two <- which(var.two == min(var.two[var.two>0]), arr.ind = TRUE)
alpha.var.two <- alpha[loc.var.two[1]]
[1] 0.03
beta.var.two <- beta[loc.var.two[2]]
[1] 0.96
var.two[loc.var.two[1],loc.var.two[2]]
[1] 0.00195809

#(3)
loc.mse.one <- which(mse.one == min(mse.one[mse.one>0]), arr.ind = TRUE)
alpha.mse.one <- alpha[loc.mse.one[1]]
[1] 0.24
beta.mse.one <- beta[loc.mse.one[2]]
[1] 0.29
mse.one[loc.mse.one[1],loc.mse.one[2]]
[1] 0.05293755
loc.mse.two <- which(mse.two == min(mse.two[mse.two>0]), arr.ind = TRUE)
alpha.mse.two <- alpha[loc.mse.two[1]]
[1] 0.21
beta.mse.two <- beta[loc.mse.two[2]]
[1] 0.29
mse.two[loc.mse.two[1],loc.mse.two[2]]
[1] 0.05292047

#(4)
sigm.1.data <- rbind(bias.one,var.one,mse.one)
location.one <- c(loc.bias.one[2],loc.var.one[2],loc.mse.one[2])
sigm.2.data <- rbind(bias.two,var.two,mse.two)
location.two <- c(loc.bias.two[2],loc.var.two[2],loc.mse.two[2])
xl <- rbind(c(0,1),c(0,0.04),c(0,0.7))
par(mfrow=c(2,3))

for(i in 1:length(location.one)){
 plot(alpha,sigm.1.data[1:101,location.one[i]],main = expression(hat(sigma)[1]),
 xlab=expression(alpha),ylab=expression(beta),ylim=c(0,1),type='l',xlim=xl[i,])
 lines(alpha,sigm.1.data[102:202,location.one[i]],col='red',lty=2)
 lines(alpha,sigm.1.data[203:303,location.one[i]],col='blue',lty=3)
 legend("topright", c('Square Bias','Variance','MSE'), col = c('black','red','blue'),
 ncol =1, cex = 1.0, lty=c(1,2,3))
}

for(i in 1:length(location.two)){
 plot(alpha,sigm.2.data[1:101,location.two[i]],main = expression(hat(sigma)[2]),
 xlab=expression(alpha),ylab=expression(beta),ylim=c(0,1),type='l',xlim=xl[i,])
 lines(alpha,sigm.2.data[102:202,location.two[i]],col='red',lty=2)
 lines(alpha,sigm.2.data[203:303,location.two[i]],col='blue',lty=3)
 legend("topright", c('Square Bias','Variance','MSE'), col = c('black','red','blue'),
 ncol =1, cex = 1.0, lty=c(1,2,3))
}

#(5)
sigm.1.data <- cbind(bias.one,var.one,mse.one)
location.one <- c(loc.bias.one[1],loc.var.one[1],loc.mse.one[1])
sigm.2.data <- cbind(bias.two,var.two,mse.two)
location.two <- c(loc.bias.two[1],loc.var.two[1],loc.mse.two[1])
xl <-rbind(c(0,0.45),c(0,0.9),c(0,0.7))
par(mfrow=c(2,3))
for(i in 1:length(location.one)){
 plot(beta,sigm.1.data[location.one[i],1:101],main =expression(hat(sigma)[1]),
 xlab=expression(beta),ylab=expression(alpha),ylim=c(0,1),type='l',xlim=xl[i,])
 lines(beta,sigm.1.data[location.one[i],102:202],col='red',lty=2)
 lines(beta,sigm.1.data[location.one[i],203:303],col='blue',lty=3)
 legend("topright", c('Square Bias','Variance','MSE'), col = c('black','red','blue'),
 ncol =1, cex = 1.0, lty=c(1,2,3))
}
for(i in 1:length(location.two)){
 plot(beta,sigm.2.data[location.two[i],1:101],main = expression(hat(sigma)[2]),
 xlab=expression(beta),ylab=expression(alpha),ylim=c(0,1),type='l',xlim=xl[i,])
 lines(beta,sigm.2.data[location.two[i],102:202],col='red',lty=2)
 lines(beta,sigm.2.data[location.two[i],203:303],col='blue',lty=3)
 legend("topright", c('Square Bias','Variance','MSE'), col = c('black','red','blue'),
 ncol =1, cex = 1.0, lty=c(1,2,3))

#---------------------------------------------------------------------------
#1.
##(1)
set.seed(12345)
nrep <- 1e5
theta <- 1
data <- rexp(nrep, theta)
alpha <- c(0.01,0.05,0.1)
type.1.error <- 0
for(i in 1:length(alpha)){
 X <- matrix(data,nrow=nrep)
 res <- (X < -log(1-alpha[i]))
 type.1.error[i] <- mean(res)
}
type.1.error
[1] 0.01019 0.04930 0.10011
##(2)
theta0 <- seq(2,500)
a <- 0.05
pw <- 0
for(i in 1:length(theta0)){
 set.seed(12345)
 dt <- rexp(nrep, theta0[i])
 xt <- matrix(dt,nrow=nrep)
 r <- (xt < -log(1-a))
 pw[i] <- mean(r)
}
theta0[which(pw >=0.6)][1]
[1] 18
theta0[which(pw >=0.8)][1]
[1] 32
theta0[which(pw>=1)][1]
[1] 250
#2.
##(1)
nrep <- 1e5
p <-0.5
nsamp <- c(10, 20, 30, 50)
alpha <- c(0.01, 0.05, 0.1)
tol.num <- matrix(0, length(nsamp),length(alpha))
for(i in 1:length(nsamp)){
 n <- nsamp[i]
 for(j in 1:length(alpha)){
 T0 <- qnorm(1-alpha[j])
 tol.num[i,j] <- ceiling((1/2)*(n+T0*sqrt(n)))
 }
}
rownames(tol.num)<- c('n=10','n=20','n=30','n=50')
colnames(tol.num) <- c('0.01','0.05','0.1')
tol.num
 0.01 0.05 0.1
n=10 9 8 8
n=20 16 14 13
n=30 22 20 19
n=50 34 31 30
##(2)
nrep <- 1e5
p <-0.7
nsamp <- c(10, 20, 30, 50)
alpha <- c(0.01, 0.05, 0.1)
stat.pow <- matrix(0,length(nsamp),length(alpha))
for(i in 1:length(nsamp)){
 n <- nsamp[i]
 for(j in 1:length(alpha)){
 set.seed(12345)
 data <- sample(0:1, nrep * n, replace = TRUE, prob= c(1 - p, p))
 d <-matrix(data, nrep, n)
 T <- apply(d, 1, function(x) 2*sqrt(n)*(mean(x)-1/2))
 T0 <- qnorm(1-alpha[j])
 stat.pow[i,j] <- mean(T>T0)
 }
}
rownames(stat.pow) <- c('n=10','n=20','n=30','n=50')
colnames(stat.pow) <- c('0.01','0.05','0.1')
stat.pow
 0.01 0.05 0.1
n=10 0.15017 0.38232 0.38232
n=20 0.23659 0.60805 0.77194
n=30 0.43184 0.72678 0.83822
n=50 0.68239 0.91517 0.95267
##(3)
nrep <- 1e5
p <-0.6
nsamp <- seq(100,300,1)
alpha <- c(0.01, 0.05, 0.1)
pw <- matrix(0,length(nsamp),length(alpha))
for(i in 1:length(nsamp)){
 n <- nsamp[i]
 for(j in 1:length(alpha)){
 set.seed(12345)
 data <- sample(0:1, nrep * n, replace = TRUE, prob= c(1 - p, p))
 d <-matrix(data, nrep, n)
 T <- apply(d, 1, function(x) 2*sqrt(n)*(mean(x)-1/2))
 T0 <- qnorm(1-alpha[j])
 pw[i,j] <- mean(T>T0)
 }
}
rownames(pw) <- paste('n=',100:300)
colnames(pw) <- c('0.01','0.05','0.1')
res <-c(which(pw[,1]>=0.8)[1],which(pw[,2]>=0.8)[1],which(pw[,3]>=0.8)[1])
res <- names(res)
res
[1] "n= 245" "n= 146" "n= 108"