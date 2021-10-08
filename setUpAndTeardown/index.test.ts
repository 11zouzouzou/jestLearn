let city = [];
function initBeforeEach() {
  city.push("zou", "lei");
}

function clearInitBeforeEach() {
  city = [];
}

function isCity(v: string) {
  return city.some((a) => {
    return a == v;
  });
}
//重复设置,每次test都会设置
beforeEach(() => {
  initBeforeEach();
});
afterEach(() => {
  clearInitBeforeEach();
});

//一次性设置
beforeAll(() => {
  return initBeforeEach();
});
afterAll(() => {
  return clearInitBeforeEach();
});
test("city database has zou", () => {
  expect(isCity("zou")).toBeTruthy();
});

test("city database has lei", () => {
  expect(isCity("lei")).toBeTruthy();
});

let food = [];
function initFoodBeforeEach() {
    food.push("food");
}

function clearFoodInitBeforeEach() {
    food = [];
}

function isFood(v: string) {
  return food.some((a) => {
    return a == v;
  });
}
//作用域 //顶级的beforeEach 会比 describe 中的beforeEach 执行的更早
describe("food", () => {
  beforeAll(() => {
    return initFoodBeforeEach();
  });
  afterAll(() => {
    return clearFoodInitBeforeEach();
  });
  test("food database has food", () => {
    expect(isFood("food")).toBeTruthy();
  });
});
