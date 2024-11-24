import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
  // test('Debe de hacer match con el snapshot', () => {
  //   const title = 'Titulo prueba';
  //   render(<FirstApp title={title} />);

  //   //toma una foto al html y crea un archivo en una carpeta "snapshots" para comprar el componente con la foto
  //   //se puede actualizar la foto haciendo click en u
  //   expect(container).toMatchSnapshot();
  // });
  
  test('Debe de hacer match con el texto', () => {
    const title = 'Titulo prueba';
    render(<FirstApp title={title} />);
    
    //Valida si existe algun elemento con el texto indicado
    expect(screen.getByText(title)).toBeTruthy();
  });
  
  test('Debe mostrar el titulo en un h1', () => {
    const title = 'Titulo prueba';
    render(<FirstApp title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
  });
  
  test('Debe de hacer match con el texto usando getByTestId', () => {
    const title = 'Titulo prueba';
    render(<FirstApp title={title} />);
    
    expect(screen.getByTestId('test-title')).toBeTruthy();
    expect(screen.getByTestId('test-title').innerHTML).toBe(title);
  });
  
  test('Debe de mostrar el subtitulo enviado por props', () => {
    const title = 'Titulo prueba';
    const subTitle = 'SubTitulo prueba';
    render(
         <FirstApp
            title={title}
            subTitle={subTitle}
         />);
    
    expect(screen.getByText(subTitle)).toBeTruthy();
    expect(screen.getAllByText(subTitle).length).toBe(1);
  });
});
