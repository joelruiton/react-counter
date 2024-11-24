import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en <FirstApp />', () => {
  // test('Debe de hacer match con el snapshot', () => {
  //   const title = 'Titulo prueba';
  //   const { container } = render(<FirstApp title={title} />);

  //   //toma una foto al html y crea un archivo en una carpeta "snapshots" para comprar el componente con la foto
  //   //se puede actualizar la foto haciendo click en u
  //   expect(container).toMatchSnapshot();
  // });
  
  test('Debe de hacer match con el texto', () => {
    const title = 'Titulo prueba';
    const { getByText } = render(<FirstApp title={title} />);
    
    //Valida si existe algun elemento con el texto indicado
    expect(getByText(title)).toBeTruthy();
  });
  
  test('Debe mostrar el titulo en un h1', () => {
    const title = 'Titulo prueba';
    const { container } = render(<FirstApp title={title} />);
    
    const h1 = container.querySelector('h1');
    //expect(h1.innerHTML).toBe(title);
    expect(h1.innerHTML).toContain(title);
  });
  
  test('Debe de hacer match con el texto usando getByTestId', () => {
    const title = 'Titulo prueba';
    const { getByTestId } = render(<FirstApp title={title} />);
    
    expect(getByTestId('test-title')).toBeTruthy();
    expect(getByTestId('test-title').innerHTML).toBe(title);
  });
  
  test('Debe de mostrar el subtitulo enviado por props', () => {
    const title = 'Titulo prueba';
    const subTitle = 'SubTitulo prueba';
    const { getByText, getAllByText } = render(
         <FirstApp
            title={title}
            subTitle={subTitle}
         />);
    
    expect(getByText(subTitle)).toBeTruthy();
    expect(getAllByText(subTitle).length).toBe(1);
  });
});
