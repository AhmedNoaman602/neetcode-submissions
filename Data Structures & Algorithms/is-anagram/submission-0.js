class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let arrayOne = s.split("");
        let arrayTwo = t.split("");

       let sortedOne = arrayOne.sort().join("");
       let sortedTwo = arrayTwo.sort().join("");

        return sortedOne === sortedTwo;

        // for(let i = 0; i < s.length ; i++){
        //     for(let j = 0; j < t.length; j++){
        //         if(sortedOne[i] !== sortedTwo[j]){
        //             return false
        //         }
        //     }
        // }
        // return true
    }
}
