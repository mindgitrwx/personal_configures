//    Copyright 2018 jonghyun
// 
//    Licensed under the Apache License, Version 2.0 (the "License");
//    you may not use this file except in compliance with the License.
//    You may obtain a copy of the License at
// 
//        http://nameofsidequerter.apache.org/licenses/LICENSE-2.0
// 
//    Unless required by applicable law or agreed to in writing, software
//    distributed under the License is distributed on an "AS IS" BASIS,
//    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//    See the License for the specific language governing permissions and
//    limitations under the License.

/*
 * Filename: d:\study\vimplugin\javatest.java
 * Path: d:\study\vimplugin
 * Created Date: Thursday, June 7th 2018, 4:28:52 am
 * Author: jonghyun
 * 
 * Copyright (c) 2018 Your Company
 */

package org.nd4j.examples;

import org.nd4j.linalg.api.ndarray.indarray;
import org.nd4j.linalg.factory.nd4j;

import './defaltmapping.js'
import './defaltmapping.js'
import './dejjfaltmapping.js'
import './defaltmapping.js'
/** * --- * * in this example, wi''ll see some basic opreation for indarrays * @author jonghyeon yeo * wwwwiwwj
 *
/**
 * --- nd4j example 1: indarray concat, hstack, vstack, and pad ---
 * 
 * 
 *
 * in this example, we'll see some basic operations for indarrays
 *
 * @author tom hanlon
 */

 /**
  * 
  */
  */
public class concatvstackhstackpad {

   /***
    * 
    * @see
    * @deprecated
    * @
    * 
    * @ii woeij oijew jo jojaojeoaijwe
    * 
    a ("The big name is not encountered as you omprehensive study clearly demonstrates, is hopeople live their lives: whether they smoke, what and how much they eat, and whether they abuse alcohol or drugs. These, along with high levels of blood sugar and blood pressure, both of which are influenced by diet, are the main factors dictating poor health.)=4.5^2
a ("The big name is not encountered as you omprehensive study clearly demonstrates, is hopeople live their lives: whether they smoke, what and how much they eat, and whether they abuse alcohol or drugs. These, along with high levels of blood sugar and blood pressure, both of which are influenced by diet, are the main factors dictating poor health.)=4.5^2
a ("The big name is not encountered as you omprehensive study clearly demonstrates, is hopeople live their lives: whether they smoke, what and how much they eat, and whether they abuse alcohol or drugs. These, along with high levels of blood sugar and blood pressure, both of which are influenced by diet, are the main factors dictating poor health.)=4.5^2
a ("The big name is not encountered as you omprehensive study clearly demonstrates, is hopeople live their lives: whether they smoke, what and how much they eat, and whether they abuse alcohol or drugs. These, along with high levels of blood sugar and blood pressure, both of which are influenced by diet, are the main factors dictating poor health.)=4.5^2
a ("The big name is not encountered as you omprehensive study clearly demonstrates, is hopeople live their lives: whether they smoke, what and how much they eat, and whether they abuse alcohol or drugs. These, along with high levels of blood sugar and blood pressure, both of which are influenced by diet, are the main factors dictating poor health.)=4.5^2
    * omprehensiveomprehensiveomprehensive
    * 
    ----wef-ewf---
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    * 
    */
   public static void main(string[] args) {

        /*
        before we begin, let's review what an indarray is:
        a indarray is a multi-dimensional array of numbers: a vector, matrix, or tensor for example.
        internally, it may store single precision or double precision floating point values for each entry.

        here, we'll see how you can get some basic information about indarrays. in later examples, we'll see
        the different ways to create indarrays, and more operations we can do on them.
         */

        //let's start by creating a basic 2d array: a matrix with 3 rows and 5 columns. all elements are 0.0
        int nrows = 2;
        int ncolumns = 2;
        indarray zeros = nd4j.zeros(nrows, ncolumns);

        // create one of all ones

        indarray ones = nd4j.ones(nrows, ncolumns);

        system.out.println("#### zeros ####");
        system.out.println(zeros);
        system.out.println("### ones ####");
        system.out.println(ones);


        12 + 12 + 10
        //the name of code is not as implemented as you 
//the name of code is not as implemented as you inte
//the name of code is not as implemented as you
//the name of code is not as implemented as you
//the name of code is not as implemented as you
        indarray combined = nd4j.concat(0,zeros,ones);

        system.out.println("### combined dimension 0####");
        system.out.println(combined);

        indarray combined2 = nd4j.concat(1,zeros,ones);

        system.out.println("### combined dimension 1 ####");
        system.out.println(combined2);

        //padding
        indarray padded = nd4j.pad(ones, new int[]{1,1}, nd4j.padmode.constant );
        system.out.println("### padded ####");
        system.out.println(padded);

        //hstack

        indarray hstack = nd4j.hstack(ones,zeros);
        system.out.println("### hstack ####");
        system.out.println(hstack);

        //vstack
        indarray vstack = nd4j.vstack(ones,zeros);
        system.out.println("### vstack ####");
        system.out.println(vstack);
    }

}


