export function convertNumberToEnglishText(n: number): string {

    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eigthy', 'ninety']
    const bigNum = ['hundred', 'thousand']
    

    let nStr = String(n)
    // making the string readable in case it has a - in the number
    if (n < 0) {
        nStr = nStr.split('-')[1]
    }
    let result : string;

    //  making sure the number is of a certain value because 
    //  a different logic will apply depending on what value the number is
    if (Number(nStr) < 20 ) {
        result = ones[Number(nStr)]
    } else if (Number(nStr) < 100) {
        if (nStr[1] == '0') {
                            // converting to number because you cant get an element of an array with a string
            result = `${tens[Number(nStr[0])]}`
        } else {
            result = `${tens[Number(nStr[0])]} ${ones[Number(nStr[1])]}`
        }
    } else if (Number(nStr) < 1000) {
        if (nStr[1] == '0' && nStr[2] == '0'){
            result = `${ones[Number(nStr[0])]} ${bigNum[0]}`
        } else if (nStr[1] == '0') {
            result = `${ones[Number(nStr[0])]} ${bigNum[0]} ${ones[Number(nStr[2])]}`
        } else if ( Number(nStr[1]+nStr[2]) < 20 ){
            result = `${ones[Number(nStr[0])]} ${bigNum[0]} ${ones[Number(nStr[1]+nStr[2])]}}`
        } else {
            result = `${ones[Number(nStr[0])]} ${bigNum[0]} ${tens[Number(nStr[1])]} ${ones[Number(nStr[2])]}`
        }
    } else if (Number(nStr) > 999 && Number(nStr) < 10000) {
            
        if (nStr[1] == '0' && nStr[2] == '0' && nStr[3] == '0'){
            result = `${ones[Number(nStr[0])]} ${bigNum[1]}`
        } else if (nStr[1] == '0' && nStr[2] == '0') {
            result = `${ones[Number(nStr[0])]} ${bigNum[1]} ${ones[Number(nStr[3])]}`
        } else if ( Number(nStr[2]+nStr[3]) < 20 && nStr[1] == '0'){
            result = `${ones[Number(nStr[0])]} ${bigNum[1]} ${ones[Number(nStr[2]+nStr[3])]}}`
        } else if ( Number(nStr[2]+nStr[3]) < 20){
            result = `${ones[Number(nStr[0])]} ${bigNum[1]} ${ones[Number(nStr[1])]} ${bigNum[0]} ${ones[Number(nStr[2]+nStr[3])]}}`
        } else {
            result = `${ones[Number(nStr[0])]} ${bigNum[1]} ${ones[Number(nStr[1])]} ${bigNum[0]} ${tens[Number(nStr[2])]} ${ones[Number(nStr[3])]}`
        }
    } else if (Number(nStr) > 9999 && Number(nStr) < 100000) {
        if (nStr[2] == '0' && nStr[3] == '0' && nStr[4] == '0'){
            if (Number(nStr[0] + nStr[1]) < 20) {
                result = `${ones[Number(nStr[0] + nStr[1])]} ${bigNum[1]}`
            } else if (nStr[1] == '0') {
                result = `${tens[Number(nStr[0])]} ${bigNum[1]}`
            } else {
                result = `${tens[Number(nStr[0])]} ${ones[Number(nStr[1])]} ${bigNum[1]}`
            }
        } else if (nStr[3] == '0' && nStr[4] == '0') {
            if (Number(nStr[0] + nStr[1]) < 20) {
                result = `${ones[Number(nStr[0] + nStr[1])]} ${bigNum[1]} ${ones[Number(nStr[2])]} ${bigNum[0]}`
            } else {
                result = `${tens[Number(nStr[0])]} ${ones[Number(nStr[1])]} ${bigNum[1]} ${ones[Number(nStr[2])]} ${bigNum[0]}`
            }
        } else if (nStr[2] == '0'){
            if (Number(nStr[3]+nStr[4]) < 20) {
                if (Number(nStr[0] + nStr[1]) < 20) {
                    result = `${ones[Number(nStr[0] + nStr[1])]} ${bigNum[1]} ${ones[Number(nStr[3]+nStr[4])]}`
                } else {
                    if (nStr[1] == '0') {
                        result = `${tens[Number(nStr[0])]} ${bigNum[1]} ${ones[Number(nStr[3]+nStr[4])]}`
                    } else {
                        result = `${tens[Number(nStr[0])]} ${ones[Number(nStr[1])]} ${bigNum[1]} ${ones[Number(nStr[3]+nStr[4])]}`
                    }
                }
            } else {
                if (Number(nStr[0] + nStr[1]) < 20) {
                    result = `${ones[Number(nStr[0] + nStr[1])]} ${bigNum[1]} ${tens[Number(nStr[3])]} ${ones[Number(nStr[4])]}`
                } else {
                    if (nStr[1] == '0') {
                        result = `${tens[Number(nStr[0])]} ${bigNum[1]} ${tens[Number(nStr[3])]} ${ones[Number(nStr[4])]}`
                    } else {
                        result = `${tens[Number(nStr[0])]} ${ones[Number(nStr[1])]} ${bigNum[1]} ${tens[Number(nStr[3])]} ${ones[Number(nStr[4])]}`
                    }
                }
            }
        } else if ( Number(nStr[3]+nStr[4]) < 20){
            if (Number(nStr[0] + nStr[1]) < 20) {
                result = `${ones[Number(nStr[0] + nStr[1])]} ${bigNum[1]} ${ones[Number(nStr[2])]} ${bigNum[0]} ${ones[Number(nStr[3]+nStr[4])]}`
            } else {
                if (nStr[1] == '0') {
                    result = `${tens[Number(nStr[0])]} ${bigNum[1]} ${ones[Number(nStr[2])]} ${bigNum[0]} ${ones[Number(nStr[3]+nStr[4])]}`
                } else {
                    result = `${tens[Number(nStr[0])]} ${ones[Number(nStr[1])]} ${bigNum[1]} ${ones[Number(nStr[2])]} ${bigNum[0]} ${ones[Number(nStr[3]+nStr[4])]}`
                }
            }
        } else {
            if (Number(nStr[0] + nStr[1]) < 20) {
                result = `${ones[Number(nStr[0] + nStr[1])]} ${bigNum[1]} ${ones[Number(nStr[2])]} ${bigNum[0]} ${tens[Number(nStr[3])]} ${ones[Number(nStr[4])]}`
            } else {
                if (nStr[1] == '0') {
                    result = `${tens[Number(nStr[0])]} ${bigNum[1]} ${ones[Number(nStr[2])]} ${bigNum[0]} ${tens[Number(nStr[3])]} ${ones[Number(nStr[4])]}`
                } else {
                    result = `${tens[Number(nStr[0])]} ${ones[Number(nStr[1])]} ${bigNum[1]} ${ones[Number(nStr[2])]} ${bigNum[0]} ${tens[Number(nStr[3])]} ${ones[Number(nStr[4])]}`
                }
            }
        }
    }

    // making the wording for a negative number
    if (n < 0 && result != '0') {
        result = 'negative ' + result
    }
    return result
}
