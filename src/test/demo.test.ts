import { Main } from "../core/demo";

test.only('On-Success', async () => {
  let mainObj = new Main();

  let result = await mainObj.addCall(1, 1);

  expect(result.Success).toBe(true);
  expect(result.StatusCode).toBe(200);
  expect(result.Data?.result).toBe(2);
});
