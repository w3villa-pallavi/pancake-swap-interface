import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
  .heading{
    color: #333 !important;
  }
  .heading-border{
    border-color: #333;
    color: #333;
  }
  .top-parent nav svg{
    fill: #333;
  }
  .top-parent nav svg:hover{
    fill: #333 !important;
  }
  .d-flex{
    display: flex;
    align-items: center;
  }
  .font-22{
    font-size: 22px;
  }
  .d-none{
    display: none;
  }
  .top-parent button{
    color: #444;
  }
  .heading-close{
    background-color: #68be47;
    color: white;
  }
  .heading-close .icon-change svg{
    fill: white;
  }
  .heading-link div, .heading-link a{
    color: #444;
  }
  .heading-link svg{
    fill: #444;
  }
  .heading-theme{
    background-color: #68be47;
    color: white;
  }
`

export default GlobalStyle
