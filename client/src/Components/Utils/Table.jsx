/**
 * @param columns [{key: string, name:string, sortable?:boolean, className?:string, classNameRow?:string, sronly?:boolean, stackable?:boolean}]
 * @param rows [{key:string, data: [{key:string, value:string | JSX.Element, stackable?:boolean}]}]
 * @returns {JSX.Element}
 * @constructor
 */
export default function Table({columns, rows}) {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  function autoMediaQueryColClass(idx) {
    switch (idx) {
      case 1:
        return 'hidden lg:table-cell'
      case 2:
        return 'hidden md:table-cell'
      case 3:
        return 'hidden sm:table-cell'
      default:
        return ''
    }
  }

  function autoMediaQueryRowClass(idx) {
    switch (idx) {
      case 1:
        return 'lg:hidden'
      case 2:
        return 'md:hidden'
      case 3:
        return 'sm:hidden'
      default:
        return ''
    }
  }

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="-mx-4 mt-8 sm:-mx-0">
          <table className="min-w-full divide-y divide-gray-500">
            <thead>
            <tr>
              {columns.map((column, idx) => (
                <th
                  key={column.id}
                  scope="col"
                  className={classNames(
                    column.className,
                    column.stackable && autoMediaQueryColClass(idx),
                    idx > 0 && "text-center",
                    "px-3 py-3.5 text-left text-gray-100 text-sm font-semibold tracking-wider"
                  )}
                >
                  {column.name}
                </th>
              ))}
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
            {rows.map((row) => (
              <tr key={row.key} className="hover:bg-light cursor-pointer" onClick={row.onClickRow}>
                {row.data.map((data, idx) => (
                  idx === 0 ? (
                    <td className="w-1/2 max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-primary sm:w-auto sm:max-w-none"
                      key={data.key}>
                      {data.value}
                      <dl className="font-normal lg:hidden text-gray-100">
                        {row.data.map((data, idx) => (
                          data.stackable ? (
                            <div key={idx}>
                              <dt className={`${autoMediaQueryRowClass(idx)} sr-only`}>{data.key}</dt>
                              <dd className={autoMediaQueryRowClass(idx)}>{data.value}</dd>
                            </div>
                          ) : null
                        ))
                        }
                      </dl>
                    </td>
                    ) : (
                  <td
                    className={classNames(
                      idx === 0 ? 'text-primary' : 'text-gray-100',
                      data.stackable && autoMediaQueryColClass(idx),
                      'w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-center sm:w-auto sm:max-w-none'
                    )}
                    key={data.key}
                  >
                    {data.value}
                  </td>)
                ))}
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}