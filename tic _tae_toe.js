var squares = document.querySelectorAll("td");
var turn_message = document.querySelector('h3')
var button = document.querySelector('#button')
var turn = 0;

function check_win(s){
	if (s[0].textContent == s[1].textContent && s[1].textContent == s[2].textContent && s[2].textContent != ''){
		return true
	} else if (s[3].textContent == s[4].textContent && s[4].textContent == s[5].textContent && s[5].textContent != ''){
		return true
	} else if (s[6].textContent == s[7].textContent && s[7].textContent == s[8].textContent && s[8].textContent != ''){
		return true
	} else if (s[0].textContent == s[3].textContent && s[3].textContent == s[6].textContent && s[6].textContent != ''){
		return true
	} else if (s[1].textContent == s[4].textContent && s[4].textContent == s[7].textContent && s[7].textContent != ''){
		return true
	} else if (s[2].textContent == s[5].textContent && s[5].textContent == s[8].textContent && s[8].textContent != ''){
		return true
	} else if (s[0].textContent == s[4].textContent && s[4].textContent == s[8].textContent && s[8].textContent != ''){
		return true
	} else if (s[6].textContent == s[4].textContent && s[4].textContent == s[2].textContent && s[2].textContent != ''){
		return true
	}
	return false
}

function empty_board(){
	for (i=0; i!=9 ; i++){
		squares[i].textContent = ''
	}
}

button.addEventListener('click',function(){
	empty_board()
	turn_message.textContent = "Player 1's turn (X)"
	turn = 0
})

for(i=0;i<9;i++){
	squares[i].addEventListener('click',function(){
		if (this.textContent == ''){
			if (turn%2 == 0){
				this.textContent = 'X'
				turn_message.textContent = "Player 2's turn (O)"
			} else {
				this.textContent = 'O'
				turn_message.textContent = "Player 1's turn (X)"
			}
			turn++
			if (turn >= 5 && check_win(squares)){
				if (turn % 2 == 0){
					turn_message.innerHTML = "Player 2 wins!"
				} else{
					turn_message.innerHTML = "Player 1 wins!"
				}
				turn = 0
			}
		} else {
			alert('This box has already been chosen!')
		}
	})
}
