import * as chai from "chai";
import chaiAsPromised from "../../lib/chai-as-promised.js";

chai.should();
chai.use(chaiAsPromised);
export default chai;
const { assert, expect } = chai;
export { assert, expect };

process.on("unhandledRejection", () => {
    // Do nothing; we test these all the time.
});
process.on("rejectionHandled", () => {
    // Do nothing; we test these all the time.
});
