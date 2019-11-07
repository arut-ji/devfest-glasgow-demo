import { shallowMount } from "@vue/test-utils";
import TitleBox from "@/components/TitleBox.vue";

describe("TitleBox.vue", () => {
  it("renders props.text when passed", () => {
    const text = "new message";
    const wrapper = shallowMount(TitleBox, {
      propsData: {
        text
      }
    });
    expect(wrapper.text()).toMatch(text);
  });
});
