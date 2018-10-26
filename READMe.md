/register

curl -X POST -H "Content-Type: application/json" --data "{\\"email\\":\\"mf@mf.com\\",\\"password\\":\\"abcdefg\\"}" http://127.0.0.1:3000/register

/login

curl -X POST -H "Content-Type:application/json" -d "{\\"email\\": \\"mf@mf.com\\", \\"password\\": \\"abcdefg\\"}" http://127.0.0.1:3000/login
