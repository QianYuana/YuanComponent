import * as React from 'react';
import { useEffect, useState } from 'react';
import './index.less';
interface IAppProps {
  cols: number;
  data?: object[] | string[];
  style?: object;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [arrs, setArrs] = useState<
    Array<Array<{ id: number; title: string; thumbnailUrl: string }>>
  >([[],[]]);
  const filiter = (arr: any[]) => {
    let num = 0;
    let newArr = [...arrs];
     arr.forEach((element: any) => {
      if (num === props.cols-1) {
        newArr[num].push(element);
        num = 0;
      } else {
        newArr[num].push(element);
        num++;
      }
    });
    console.log(newArr);
    setArrs(newArr);
  };

  useEffect(() => {
    let defalutArr = new Array(props.cols || 2).fill([]);
    setArrs(defalutArr);
    if (arrs.length !== 0 && props.data) {
      filiter(props.data);
    }
  }, []);
  return (
    <div className="app-1">
      <h1>瀑布流布局</h1>
      <ul className="grid">
        {arrs &&
          arrs.map((item) => (
            <li key={item.toString()}>
              {item &&
                item.map((item1) => (
                  <div key={item1.id} className="grid-item">
                    <img src={item1.thumbnailUrl} alt={item1.title} />
                  </div>
                ))}
            </li>
          ))}
      </ul>
    </div>
  );
};
App.defaultProps = {
  cols: 2,
  data: [],
  style: {},
};

export default App;
