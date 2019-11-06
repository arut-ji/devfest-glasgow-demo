import { shallowMount } from "@vue/test-utils";
import Title from "@/components/Title.vue";

describe("Title.vue", () => {
  it("renders props.text when passed", () => {
    const text = "new message";
    const wrapper = shallowMount(Title, {
      propsData: {
        text
      }
    });
    expect(wrapper.text()).toMatch(text);
  });
});