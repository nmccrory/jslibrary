var _ = {
	map: function(list, iteratee){
		for(var i=0;i<list.length;i++){
			list[i] = iteratee(list[i]);
		}
		return list;
	},
	reduce: function(list, consolidate){
		var result = 0;
		for(var i=0;i<list.length;i++){
			result = consolidate(result,list[i]);
		}
		return result;
	},
	find: function(list, locate){
		var result = 0;
		for(var i=0;list.length;i++){
			if(locate(list[i])){
				result = list[i];
				break;
			}
		}
		return result;
	},
	filter: function(list, filter){
		var result = [];
		for(var i=0;i<list.length;i++){
			if(filter(list[i])){
				result.push(list[i]);
			}
		}
		return result;
	},
	reject: function(list,filter){
		var result = [];
		for(var i=0;i<list.length;i++){
			if(!filter(list[i])){
				result.push(list[i]);
			}
		}
		return result;
	}
}

var byThree = _.map([2,5,7], function(num){ return num*3;});
console.log(byThree);

var reduce = _.reduce([1,2,3], function(memo,num){ return memo+num;});
console.log(reduce);

var even = _.find([1, 2, 3, 4, 5, 6], function(num){return num % 2 == 0;});
console.log(even);

var evens = _.filter([1,2,3,4,5,6], function(num){return num % 2 == 0;});
console.log(evens);

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds);