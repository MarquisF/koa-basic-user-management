/register

curl -X POST -H "Content-Type: application/json" --data "{\\"username\\":\\"admin\\",\\"password\\":\\"abcdefg\\"}" http://127.0.0.1:3000/register

/login

curl -X POST -H "Content-Type:application/json" -d "{\\"email\\": \\"marquisfffff@gmail.com\\", \\"password\\": \\"abcdefg\\"}" http://127.0.0.1:3000/login
