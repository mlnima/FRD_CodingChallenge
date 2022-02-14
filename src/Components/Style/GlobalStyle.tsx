import {createGlobalStyle} from "styled-components";


const GlobalStyles = createGlobalStyle`
    :root{
      --main-text-color: #000;
      --main-background-color: #ccc;
      
      --navigation-text-color: #000;
      
      --header-background-color: #f2f2f2;
      
      --primary-button-link-background-color: #f90;
      --primary-button-link-text-color: #000;

      --secondary-button-link-background-color: #fff;
      --secondary-button-link-text-color: #202020;

      --danger-button-link-background-color:#fff;
      --danger-button-link-text-color:red;

      --vehicle-card-text-color:#202020;
      --vehicle-card-background-color:#fff;
    }
    
    body{
      background-color: #fff;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .btn{
      display: inline-block;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border: 1px solid var(--primary-button-link-text-color, #000);
      padding: .375rem .75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: .25rem;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      cursor: pointer;
    }

    .btn-primary{
      background-color: var(--primary-button-link-background-color, #f90);
      color: var(--primary-button-link-text-color, #000);
    }
    
    .btn-secondary{
      background-color: var(--secondary-button-link-background-color, #6c757d);
      color: var(--secondary-button-link-text-color, #fff);
    }
    
    .btn-danger{
      background-color: var(--danger-button-link-background-color, #dc3545);
      color: var(--danger-button-link-text-color, #fff);
    }
    
    .btn-info{
      background-color: var(--info-button-link-background-color, #117a8b);
      color: var(--info-button-text-color, #fff);
    }

    .custom-select{
      display: inline-block;
      width: 50%;
      height: calc(2.25rem + 2px);
      padding: .375rem .75rem .375rem .75rem;
      line-height: 1.5;
      color: #495057;
      vertical-align: middle;
      background: #fff ;
      border: 1px solid #ced4da;
      border-radius: .25rem;
    }
    .form-control-input{
      width: 100%;
      display: block;
      padding: .375rem .75rem;
      font-size: 1rem;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: .25rem;
      transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    
    .article-card{
      width: 40vw;
      margin: 5px;
      padding: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: var(--card-background-color,#fff);
      border: 1px solid #000;
      border-radius: 3px;
   
      .card-link{
        text-decoration: none;
        .card-thumbnail{
          width: 100%;
          height: calc(100% / 1.777);
        }
        .card-title {
          font-weight: initial;
          color: var(--card-text-color,#222);
          text-align: center;
        }
      }
    }
    

    @media only screen and (min-width: 768px){
      .article-card{
        width: 320px;
        .card-thumbnail{
          width: 100%;
          height: calc(100% / 1.777);
        }
      }
    }
`

export default GlobalStyles;