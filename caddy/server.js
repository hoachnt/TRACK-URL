var express = require("express");
var app = express();
var path = require("path");

const PORT = 8080;

// Настройка для обслуживания статических файлов из текущей директории
app.use(express.static(path.join(__dirname)));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function () {
  console.log(`Server is running on http://localhost:${PORT}`);
});
