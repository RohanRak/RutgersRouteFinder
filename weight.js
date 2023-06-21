/* 
 * Weight Calculation:
 *      - (Think in terms of time)
 *      - ~1 minute <=> 1 weight level
 *      - So, a 4 weighting on an edge should imply a ~4 minute travel time and vice versa.
 *      - Weight will be calculated using 4 variables(ranked in terms of priority):
 *          1. the predicted time given by transloc
 *          2. how full the bus is
 *          3. how busy campus is at the specified time
 *          4. how many buses on the specified edge/path
 */

/*
 * How does each variable impact the travel time?
 *      - For variable 1, this will be a 1:1 ratio. Where we plug in the value directly with no modifications.
 *      - For variable 2, this will impact the decision on whether to take a certain bus. However! This number is not accurate all the time!
 *      - For variable 3, one impact is that we want this to hinder paths that take multiple buses as the chance a bus is full is increased.
 *      - For variable 4, it's a bit more nuanced. I'm not sure how exactly this would help(because 1 would cover this) -> maybe remove?? idk.1
 */


/*
 * Calculates the weight for an edge
 */
function weight(travel_time, fill_percentage, busy_constant, num_buses) {

    // Temporary equation. Disregard
    return (travel_time * (2 - fill_percentage)) + busy_constant + num_buses;
    
}