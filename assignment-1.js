//== TWO SUM ===

let array = [1, 3, 10, 11, 14]
let goal = 13

function twosum(arr,goal){
    //complexity of assignment operator O(1)
    let map= {}

// === complexity of this loop O(n) ===
    for(let i = 0; i<arr.length; i++){
        map[array[i]] = i
    }

    
// ===complexity of assignment operator O(1) ===
    let twoIndex = []

// === complexity of this loop O(n)===
    for(let i = 0; i<arr.length; i++){
        let target = goal-arr[i]
        if(map[target] !=null && map[target]!=i){
            twoIndex.push(i)
            twoIndex.push(map[target])
            break;
        }
    }
    
    console.log(twoIndex.join(' '));
}

twosum(array,goal)

// === the complexity of the above  twosum function is O(n)===



//------- task 2---------------

function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }

    return maxProfit;
}

// === the time complexity of maxprofit O(n)