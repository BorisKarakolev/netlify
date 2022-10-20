import { mount } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";

describe("navbar", () => {
  it("displays company name", (done) => {
    const wrapper = mount(Navbar);
    expect(wrapper.text()).toMatch('Netlify')
    done();
  });
});
