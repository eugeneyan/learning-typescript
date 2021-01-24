var password = prompt('Enter your password');
password.length < 7
    ? alert('Password is too short! (must be at least 7 chars)')
    : alert('Password accepted!');
