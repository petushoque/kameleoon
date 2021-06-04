const numbers = document.querySelector('.numbers')

let printer

for (let i = 1; i <= 100; i++) { 
        printer = i
        if (!(i%15)) {printer = 'A/B Testing'}
        else if (!(i%3)) {printer = 'A/B'}
        else if (!(i%5)) {printer = 'Testing'}
        let output = document.createElement('h1')
        output.textContent = printer
        numbers.appendChild(output)
}