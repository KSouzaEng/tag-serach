import { shallowMount } from '@vue/test-utils'
import ElementsViews from '../../src/components/ElementsViews.vue'
import Searchinfo from '../../src/components/Searchinfo.vue'



describe('ElementsViews', () => {
    const build = () =>{
        const wrapper = shallowMount(ElementsViews)

        return{
            wrapper,
            info: () => wrapper.findComponent(Searchinfo)
            
        }
    }
    it('renders the component', () => {
 
        const { wrapper } = build()
      
        expect(wrapper.html()).toMatchSnapshot()
      })
      it('renders main child components',() => {

        const { info } = build()

        expect(info().exists()).toBe(true)

    })
    it('passes a binded user prop to Search component', () => {
        // arrange
        const { wrapper, info } = build()
        wrapper.setData({
          
            word: 'Karem'
          
        })
    
        expect(info().vm.word).toBe(wrapper.vm.word)
      })
  })