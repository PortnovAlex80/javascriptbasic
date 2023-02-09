function crypto(password) {
/* alghoritms
    1. devide lenght string by 2 and even control
    2. right shitf 2 times
    3. reverse
    4. join     */
    let passarr = devideString(password);
    left_password  = passarr.left_password.split("");
    right_password = passarr.right_password.split("");
    
    // reverse 
    left_password.reverse();
    right_password.reverse();
    
    // shift 2 times
    shiftPassword(left_password);
    shiftPassword(right_password);

    // ret crypto password
    print(`Crypto server - ${left_password},${right_password}`) 
    return (left_password.join('') + right_password.join(''))
}

function devideString(password) {
    let lng = (password.length);
    let fullpass = password;
    //print(lng)
    //even check
    password = (lng % 2 === 0) // crypto pass always even
    ? password  // even
    : (password+'&') // if not even, make it even +1 char
    
    lng = password.length;
    let left_password = password.substring(0, (lng / 2));
    let right_password = password.substring((lng / 2), lng);
    // print(`Devide Service: left -  ${left_password}`);
    // print(`Devide Service: right -  ${right_password}`);  
    return {left_password, right_password} //password object
};

function shiftPassword(password) {

    let exchange = password.pop();
    password.unshift(exchange);
    exchange = password.pop();
    password.unshift(exchange); 
    //   print(`Shift server: shift 2 time password = ${password}`)

};

function unshiftPassword(password) {
    // password is Ref type
    let exchange = password.shift();
    password.push(exchange);
    exchange = password.shift();
    password.push(exchange);

};

function check (crypto, password) {
    
    let hashpass = '';
    let passarr = devideString(crypto);
    left_password  = passarr.left_password.split("");
    right_password = passarr.right_password.split("");

    // shift 2 times
    unshiftPassword(left_password);
    unshiftPassword(right_password);

    // reverse 
    left_password.reverse();
    right_password.reverse();
    if (right_password.slice(-1) == '&') { right_password.pop()} // remove  
    hashpass = left_password.join('') + right_password.join('');
    print(`Check server - ${hashpass}`)
    return (hashpass === password) ? 'Password OK' : 'ERROR' 
}

// start with test data
testpass = '123456789'
print(check(crypto(testpass), testpass)); // expect 200
print(check(crypto(testpass), 'sjdkjbksd')); // expect 401

// libs
function  print(message) {
    console.log(message)
}