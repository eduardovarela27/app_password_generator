import { verificatePassword } from "./verificatePassword";

const generatePassword = (config) => {
    const options = {
        numbers: "0 1 2 3 4 5 6 7 8 9",
        simbols: "! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /",
        upperCase: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
		lowercase: "a b c d e f g h i j k l m n o p q r s t u v w x y z"
    }
    let password = '';
    let SelectedCharacters = '';
    let check = false;

   
    for(let opt in config){
        if(config[opt] === true){
            SelectedCharacters += options[opt] + ' ';
        }
    }

    SelectedCharacters += options.lowercase;
    SelectedCharacters.trim()
    SelectedCharacters = SelectedCharacters.split(' ');


    while (check === false) {
        for(let i =1; i <= config.length; i++){
            password += SelectedCharacters[Math.floor(Math.random() * SelectedCharacters.length)];
        }
        if(verificatePassword(password,[config["simbols"],config["numbers"],config["upperCase"],true])){
            check=true
        }else{
            password=''
        }
    }
    return password;
    

}

export default generatePassword;