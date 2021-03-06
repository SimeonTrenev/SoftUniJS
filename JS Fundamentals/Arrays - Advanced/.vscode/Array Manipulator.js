arrayMinipulator = (nums, cmds) => {
    while((cmd = cmds.shift().split(' '))[0] !== 'print') {
        if(cmd[0] === 'add') {
            nums.splice(Number(cmd[1]), 0, Number(cmd[2]));
        } else if(cmd[0] === 'addMany') {
            nums.splice(Number(cmd[1]), 0, ...cmd.slice(2).map(Number));
        } else if(cmd[0] === 'contains') {
            console.log(nums.indexOf(Number(cmd[1])));
        } else if(cmd[0] === 'remove') {
            nums.splice(Number(cmd[1]), 1);
        } else if(cmd[0] === 'shift') {
            let shifts = Number(cmd[1]);
            for(let i = 0; i < shifts; i++) {
                nums.push(nums.shift());
            }
        } else if(cmd[0] === 'sumPairs') {
            let summed = [], len = nums.length;
            for(let i = 0; i < len; i += 2) {
                summed.push(nums[i] + (nums[i + 1] || 0));
            }
           
            nums = summed;
        }
    }
 
    console.log('[ ' + nums.join(', ') + ' ]');
}
arrayMinipulator([1, 2, 3, 4, 5],
['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']

)