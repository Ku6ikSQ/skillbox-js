function globalError() {
  const error = Error("Глобальная ошибка");
  error.name = "GlobalError";
  throw error;
}

function localError() {
  const error = Error("Локальная ошибка");
  error.name = "LocalError";
  throw error;
}

function testErrorScope(fn) {
  try {
    try {
      fn();
    } catch (error) {
      if (error.name === "LocalError") {
        console.log("Обнаружена локальная ошибка");
        console.error(error);
      } else {
        throw error; // Пробрасываем ошибку дальше, если это не локальная ошибка
      }
    }
  } catch (error) {
    console.log("Обнаружена глобальная ошибка");
    console.error(error);
  }
}

testErrorScope(localError);
testErrorScope(globalError);
