export function mega(numbers = []) {


    const amount = 6;

    if (numbers.length == amount) {
        return numbers.sort((n1, n2) => (n1 - n2));
    }

    const randomNumber = parseInt(Math.random() * 60) + 1;

    if (!numbers.includes(randomNumber)) {
        return mega([...numbers, randomNumber]);
    } else {
        return mega(numbers);
    }

}