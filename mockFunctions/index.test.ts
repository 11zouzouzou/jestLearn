function forEachTest(items: number[], callback: (number: number) => void) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}

test("mock function forEachTest", () => {
  const mockCallback = jest.fn((x) => 42 + x);
  forEachTest([0, 1], mockCallback);
  // 此 mock 函数被调用了两次
  expect(mockCallback.mock.calls.length).toBe(2);

  // 第一次调用函数时的第一个参数是 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // 第二次调用函数时的第一个参数是 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);

  // 这个函数被实例化两次
  expect(mockCallback.mock.instances.length).toBe(2);

  // 第一次函数调用的返回值是 42
  expect(mockCallback.mock.results[0].value).toBe(42);
  // 第二次函数调用的返回值是 43
  expect(mockCallback.mock.results[1].value).toBe(43);
});

test("mock return value", () => {
  const filterTestFn = jest.fn();

  // Make the mock return `true` for the first call,
  // and `false` for the second call
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const result = [11, 12].filter((num) => filterTestFn(num));

  //   console.log(result);
  //   // > [11]
  //   console.log(filterTestFn.mock.calls[0][0]); // 11
  //   console.log(filterTestFn.mock.calls[1][0]); // 12
});

//模拟模块
import defaultExport, { foo, bar } from "./fooBar";
jest.mock("./fooBar", () => {
  const originalModule = jest.requireActual("./fooBar");
  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => "mocked baz"),
    foo: "mocked foo",
  };
});
test("should do a partial mock", () => {
  const defaultExportResult = defaultExport();
  expect(defaultExportResult).toBe("mocked baz");
  expect(defaultExport).toHaveBeenCalled();
//   expect(defaultExport).toMatchSnapshot();
  expect(foo).toBe("mocked foo");
  expect(bar()).toBe("bar");
});

test("mock implementation", () => {
  const myMockFn = jest.fn((cb) => cb(null, true));

  myMockFn((err: any, val: boolean) => console.log(val));

  const myMockFn2 = jest
    .fn()
    .mockImplementationOnce((cb) => cb(null, true))
    .mockImplementationOnce((cb) => cb(null, false));

  myMockFn2((err: any, val: boolean) => console.log(val));
  // > true

  myMockFn2((err: any, val: boolean) => console.log(val));
  // > false

  const myMockFn3 = jest
    .fn(() => "default")
    .mockImplementationOnce(() => "first call")
    .mockImplementationOnce(() => "second call")
    .mockName("myMockFn3");

  console.log(
    myMockFn3.getMockName(),
    myMockFn3(),
    myMockFn3(),
    myMockFn3(),
    myMockFn3()
  );
  // > 'first call', 'second call', 'default', 'default'
  //链式的，如果你希望创建的函数支持链式调用（因为返回了this）
  const myObj = {
    myMethod: jest.fn().mockReturnThis(),
  };
});
