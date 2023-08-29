# TIC-TAC-TOE
This project aims to develop a Tic Tac Toe game using HTML, CSS, JavaScript. It mainly consists of developing and implementing a computer program that helps two players to play Tic Tac Toe against each other.
In order to understand what Tic Tac Toe game is and how to play the game, below is the description.

## Game Description
Tic Tac Toe is a two-player game (both of them being played by humans in this project). In this game, there is a board with 3 x 3 squares.

The two players take turns putting marks on a 3x3 board. The goal of Tic Tac Toe game is to be one of the players to get three same symbols in a row - horizontally, vertically or diagonally on a 3 x 3 grid. The player who first gets 3 of his/her symbols (marks) in a row - vertically, horizontally, or diagonally wins the game, and the other loses the game. 

## Game Rules
A player can choose between two symbols with his opponent, usual game uses “X” and “O”.

The player that gets to play first will get the "X" mark (we call him/her player 1) and the player that gets to play second will get the "O" mark (we call him/her player 2).

Player 1 and 2 take turns making moves with Player 1 playing mark “X” and Player 2 playing mark “O”.

A player marks any of the 3x3 squares with his mark (“X” or “O”) and their aim is to create a straight line horizontally, vertically or diagonally with two intensions:
a. One of the players gets three of his/her marks in a row (vertically, horizontally, or diagonally) i.e. that player wins the game.
b. If no one can create a straight line with their own mark and all the positions on the board are occupied, then the game ends in a draw/tie.

## Implementation Plan
The implementation workflow for this project is as follows:
<img scr="./Images/flowchart.png" alt="Flow Chart">

## Features
- Implements a well styled board, X's and O's for the game.
- On a player's turn, the player can hover over the cells to find the mark.
- On winning, displays 'X Wins!' or 'O Wins!' respectively.
- On event of a draw, displays the message 'Draw!'
- Once the result messages are displayed, displays a button for re starting the game.

## Usage
Click on the below website to use the Game.
[Play Tic-Tac-Toe]()

## Screenshots
<img scr="./Images/board.png" alt="Board">
Initial empty Board.

<img scr="./Images/markxo.png" alt="X and O marks" width="100" height="100">
Player 1's 'X' mark. Player 2's 'O' mark.

<img scr="./Images/hoverx.png" alt="Hover effects x" width="100" height="100">
<img scr="./Images/hovero.png" alt="Hover effects o" width="100" height="100">
The players' marks on hover.

<img scr="./Images/Owins.png" alt="O wins" width="100" height="100">
<img scr="./Images/Xwins.png" alt="X wins" width="100" height="100">
<img scr="./Images/draw.png" alt="draw" width="100" height="100">
Result messages and the 'Restart' button.

## Future Scope
- To implement an option to play against AI. 
- Set difficulty modes while playing against the AI bot.