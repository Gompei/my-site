import hljs from 'highlight.js'
import hljsDefineTerraform from '@/utils/terraform'

hljs.registerLanguage('terraform', hljsDefineTerraform)

export default hljs
