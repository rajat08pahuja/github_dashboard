import React from 'react'

function List(props) {
    let { cRepos, loading, cPage, itemsInEachPage, sortIncreasing, sortDecreasing } = props;
    // console.log(sortIncreasing);

    let handleSortIncName = () => {
        sortIncreasing("full_name");
    }

    let handleSortIncStars = () => {
        sortIncreasing("stargazers_count");
    }

    let handleSortDecName = () => {
        sortDecreasing("full_name");
    }

    let handleSortDecStars = () => {
        sortDecreasing("stargazers_count");
    }

    return (
        <div>
            {(loading == true) ? <div>Loading...</div> : (
                <table className='table-auto border border-slate-400'>
                    <thead>
                        <tr>
                            <th className='border border-slate-400 py-3 px-1'>#</th>
                            <th className='border border-slate-400 py-3 px-1'>
                                <button onClick={handleSortIncName}><i class="fa-solid fa-arrow-down-short-wide"></i></button>
                                Name
                                <button onClick={handleSortDecName}><i class="fa-solid fa-arrow-down-wide-short"></i></button>
                            </th>
                            <th className='border border-slate-400 py-3 px-1'>Decription</th>
                            <th className='border border-slate-400 py-3 px-1'>Owner</th>
                            <th className='border border-slate-400 py-3 px-2'>
                                <button onClick={handleSortIncStars}><i class="fa-solid fa-arrow-down-short-wide"></i></button>
                                Stars Count
                                <button onClick={handleSortDecStars}><i class="fa-solid fa-arrow-down-wide-short"></i></button>
                            </th>
                            <th className='border border-slate-400 py-3 px-1'>Forks Count</th>
                            <th className='border border-slate-400 py-3 px-1'>Language</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cRepos.map((obj, idx) => {
                                return (
                                    <tr key={obj.id}>
                                        <td className='border border-slate-400 py-3 px-1'>{((cPage - 1) * itemsInEachPage) + (idx + 1)}</td>
                                        <td className='border border-slate-400 py-3 px-1'><a href={obj.html_url}>{obj.full_name}</a></td>
                                        <td className='border border-slate-400 py-3 px-1'>{obj.description}</td>
                                        <td className='border border-slate-400 py-3 px-1'>{obj.owner.login}</td>
                                        <td className='border border-slate-400 py-3 px-1'>{obj.stargazers_count}</td>
                                        <td className='border border-slate-400 py-3 px-1'>{obj.forks_count}</td>
                                        <td className='border border-slate-400 py-3 px-1'>{obj.language}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>)}
        </div>
    )
}

export default List