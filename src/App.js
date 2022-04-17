import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import NavBar from './components/NavBar';
import Pagination from './components/Pagination';

function App() {
  const [fetchedRepos, updateFetchedRepos] = useState([]);
  const [allRepos, updateAllRepos] = useState([]);
  const [cRepos, updateCRepos] = useState([]);
  const [cPage, updateCPage] = useState(1);
  const [itemsInEachPage, updateItemsInEachPage] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fn = async () => {
      let res = await axios.get("https://api.github.com/search/repositories?q=language:Javascript&sort=stars&order=desc");
      updateFetchedRepos(res.data.items);
      setLoading(false);
    }

    fn();
  }, []);

  useEffect(() => {
    updateAllRepos(fetchedRepos);
  }, [fetchedRepos]);

  useEffect(() => {
    updateCRepos(allRepos.slice((cPage - 1) * itemsInEachPage, cPage * itemsInEachPage));
  }, [allRepos]);

  useEffect(() => {
    updateCRepos(allRepos.slice((cPage - 1) * itemsInEachPage, cPage * itemsInEachPage));
  }, [cPage]);

  useEffect(() => {
    updateCRepos(allRepos.slice((cPage - 1) * itemsInEachPage, cPage * itemsInEachPage));
  }, [itemsInEachPage]);

  let changePage = (newPage) => {
    console.log(newPage);
    if (newPage <= 0 || newPage > (allRepos.length / itemsInEachPage)) {

    } else {
      updateCPage(newPage);
    }
  }

  let incrementPage = () => {
    if (cPage < (allRepos.length / itemsInEachPage)) {
      updateCPage(cPage + 1);
    }
  }

  let decrementPage = () => {
    if (cPage > 1) {
      updateCPage(cPage - 1);
    }
  }

  let changeItemsInEachPage = (num) => {
    updateItemsInEachPage(num);
  }

  let shortenArray = (attr, val) => {
    let newArr = fetchedRepos.filter((obj) => {
      if (val == "") {
        return obj;
      } else {
        return obj[attr].toLowerCase().includes(val)
      }
    })

    updateAllRepos(newArr);
  }

  let sortIncreasing = (attr) => {
    function compare(a, b) {
      if (a[attr] > b[attr]) {
        return 1;
      } else if (a[attr] < b[attr]) {
        return -1;
      } else {
        return 0;
      }
    }

    let sorted = allRepos.sort(compare);
    updateAllRepos([...sorted]);
  }

  let sortDecreasing = (attr) => {
    function compare(a, b) {
      if (a[attr] > b[attr]) {
        return -1;
      } else if (a[attr] < b[attr]) {
        return 1;
      } else {
        return 0;
      }
    }

    let sorted = allRepos.sort(compare);
    updateAllRepos([...sorted]);
  }

  return (
    <div className="App">
      <NavBar shortenArray={shortenArray} />
      <List cRepos={cRepos} loading={loading} cPage={cPage} itemsInEachPage={itemsInEachPage} maxLen={allRepos.length} sortIncreasing={sortIncreasing} sortDecreasing={sortDecreasing} />
      <Pagination cPage={cPage} changePage={changePage} maxPages={allRepos.length / itemsInEachPage} itemsInEachPage={itemsInEachPage} incrementPage={incrementPage} changeItemsInEachPage={changeItemsInEachPage} decrementPage={decrementPage} />
    </div>
  );
}

export default App;
