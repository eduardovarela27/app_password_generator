export const verificatePassword = (password,config) => {
    let numbers = "0 1 2 3 4 5 6 7 8 9".split(' ');
    let simbols = "! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /".split(' ');
    let upperCase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(' ');
    let lowercase = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(' ');
    const parameters = [simbols,numbers,upperCase,lowercase];
    const results = [];
    let check = null;
    
    for (let x = 0; x < parameters.length; x++) {
        for (let i = 0; i < password.length; i++) {
            const letter = password.charAt(i);
            if(parameters[x].includes(letter)){check=true; break;}
            else{check=false}
        }
            results.push(check=== true ? true : false);
    }

    for (let y = 0; y < results.length; y++) {
        if(results[y]==!config[y]){return false}
    }

    return true;
}

