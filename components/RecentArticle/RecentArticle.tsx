import { Button, Switch } from '@nextui-org/react';
import { useEffect, useReducer, useState } from 'react';
import HoverCard from '../Cards/HoverCard';
import { GridIcon, ListIcon} from '../icons/grid';
import { Skeleton } from 'primereact/skeleton';
import { GridComponent } from '../Grid/GridComponent';

enum ACTIONS {
  SET_ARTICLE = 'SET_ARTICLE',
  SET_LOADING = 'SET_LOADING',
  TOGGLE_GRID = 'TOGGLE_GRID',
}

const data = [
  { title: 'Hindi' },
  { title: 'English' },
  { title: 'Maths' },
  { title: 'Scc' },
  { title: 'Compititive Exams' },
  { title: 'PSC' },
  { title: 'General Knowledge' },
];
const componentState = { articles: [], loading: false, gridEnabled: true };

function reducer(state: any, action: { type: string; payload: any; }) {
  switch (action.type) {
    case ACTIONS.SET_ARTICLE:
      return { ...state, articles: action.payload };
    case ACTIONS.SET_LOADING:
      return { ...state, loading: action.payload };
    case ACTIONS.TOGGLE_GRID:
      return { ...state, gridEnabled: action.payload };
    default:
      return state;
  }
}

const RecentArticle = (props: any) => {  
  const [state, dispatch] = useReducer(reducer, componentState);  

  console.log(state, '>>>');

  useEffect(() => {
    dispatch({ type: ACTIONS.SET_LOADING, payload: true });
    setTimeout(() => {
      dispatch({ type: ACTIONS.SET_ARTICLE, payload: data });
      dispatch({ type: ACTIONS.SET_LOADING, payload: false });
    },2000)
  }, []);

  return (
    <div className="bg-slate-100 mt-3 p-2 sm:p-12">
      <div className="p-3 flex items-center justify-between">
        <h3>Courses we offers </h3>        
      </div>

      {state.loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {new Array(10).fill(0).map(() => {
            return (
              <div className="p-2">
                <Skeleton size="13rem">
                  <Skeleton className="mb-2"></Skeleton>
                  <Skeleton width="10rem" className="mb-2"></Skeleton>
                  <Skeleton width="5rem" className="mb-2"></Skeleton>
                  <Skeleton height="2rem" className="mb-2"></Skeleton>
                </Skeleton>
              </div>
            );
          })}
        </div>
      )}

      {state.gridEnabled && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {state.articles.map((article: any) => {
            return <HoverCard article={article} />;
          })}
        </div>
      )}
    </div>
  );
};

export default RecentArticle;
