import type { Config } from 'tailwindcss';
const config: Config={content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{colors:{navy:'#0B1B2B',brand:{DEFAULT:'#12D6DF',50:'#E6FCFD',100:'#C9F7FA',200:'#94ECF2',300:'#5FE0E9',400:'#34D3E0',500:'#12D6DF',600:'#0FB2BA',700:'#0C8C93',800:'#096970',900:'#06474D'},paper:'#F5F8FA'},boxShadow:{soft:'0 10px 30px rgba(18, 214, 223, 0.12)'}}},plugins:[]};
export default config;
