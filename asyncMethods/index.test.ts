async function fetchData(callback: any) {
  callback("peanut butter");
}

async function fetchDataPromise(bool: boolean = true) {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve("peanut butter");
    } else {
      reject("error");
    }
  });
}

test("callback:the data is peanut butter", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("peanut butter");
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

test("PromiseReolves:the data is peanut butter", () => {
  return expect(fetchDataPromise()).resolves.toBe("peanut butter");
});

test("PromiseRejects:the fetch fails with an error", () => {
  return expect(fetchDataPromise(false)).rejects.toMatch("error");
});

test("await:the data is peanut butter", async () => {
  const data = await fetchDataPromise();
  expect(data).toBe("peanut butter");
});
