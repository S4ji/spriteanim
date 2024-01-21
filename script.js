const spriteMainCharacter = document.querySelector('#spriteMainCharacter')
console.log(spriteMainCharacter)
let movementValue = 10
let positionPage = 10
let murGauche = positionPage
let sizeContainerGame = 1000

function moveRight(elementToMove) {
    elementToMove.style.transform = `translateX(${positionPage}px)`
}

window.addEventListener('keydown', function (event) {
    if (event.key === 'd' && positionPage < sizeContainerGame) {
        moveRight(spriteMainCharacter)
        positionPage += movementValue
        console.log(
            `Position Page :${positionPage} Movement value : ${movementValue}`
        )
    }
})

function moveLeft(elementToMove) {
    elementToMove.style.transform = `translateX(${positionPage}px)`
}

window.addEventListener('keydown', function (event) {
    if (event.key === 'q' && positionPage != murGauche) {
        moveRight(spriteMainCharacter)
        positionPage -= movementValue
        console.log(
            `Position Page :${positionPage} Movement value : ${movementValue}`
        )
    }
})

function moveJump(elementToMove) {
    elementToMove.style.transform = `translateY(${positionPage * 10}px)`
}

window.addEventListener('keydown', function (event) {
    if (event.key === '' && positionPage != 0) {
        moveJump(spriteMainCharacter)
        positionPage += movementValue * 10
        console.log(
            `Position Page :${positionPage} Movement value : ${movementValue}`
        )
    }
})

// Position Page n'est différent de 0 pas bon, le code est mal réutilisable
