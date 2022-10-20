import ShowSearch from "@/components/ShowSearch.vue";
import { mount } from "@vue/test-utils";

describe("ShowSearch", () => {
  it("checks the prop", (done) => {
    const wrapper = mount(ShowSearch, {
      props: {
        inputText: '',
      },
    });
    expect(wrapper.text()).toContain('')
    done();
  });
});
