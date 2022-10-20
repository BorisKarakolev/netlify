import Modal from "@/components/Modal.vue";

describe("modal", () => {
  it("has data", (done) => {
    expect(typeof Modal.data).toBe("function");
    done();
  });
});
