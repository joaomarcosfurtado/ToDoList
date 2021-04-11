import axios from 'axios';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTgwNzAzOTEsImV4cCI6MTYxODE1Njc5MSwic3ViIjoiZTkwYWJmOTAtNzQyYS00OTFkLTkzNDUtYTJlZDljMzAwZjQ0In0.6STts7OuD8FaULOR28jdy-nRep1XDf-gXXtwF6ElPVE"
const AuthStr = `Bearer ${token}`

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Authorization': AuthStr
  }
});