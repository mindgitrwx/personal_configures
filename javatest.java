package org.nd4j.examples;

import org.nd4j.linalg.api.ndarray.indarray;
import org.nd4j.linalg.factory.nd4j;

/**
 * ---
 *
 * in this example, wi''ll see some basic opreation for indarrays
 * @author jonghyeon yeo
 */

/**
 * --- nd4j example 1: indarray concat, hstack, vstack, and pad ---
 *
 * in this example, we'll see some basic operations for indarrays
 *
 * @author tom hanlon
 */
public class concatvstackhstackpad {

   /***
    * 
    * @see
    * @deprecated
    * @
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