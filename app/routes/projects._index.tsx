import { Badge } from "@/components/ui/badge"
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { formatRelative } from "date-fns"

type Worker = {
  hostname: string
  ip: string
  status: "unknown" | "down" | "up" | "pending"
  lastSeen: Date
}

export default function Route() {
  const columnHelper = createColumnHelper<Worker>()
  const columns = [
    columnHelper.accessor("hostname", {
      header: () => <span className="text-sm font-semibold">Hostname</span>,
      cell: (props) => (
        <span className="font-mono text-xs">{props.getValue()}</span>
      ),
    }),
    columnHelper.accessor("ip", {
      header: () => <span className="text-sm font-semibold">IP</span>,
      cell: (props) => (
        <span className="font-mono text-xs">{props.getValue()}</span>
      ),
    }),
    columnHelper.accessor("status", {
      header: () => <span className="text-sm font-semibold">Status</span>,
      cell: (props) => {
        switch (props.getValue()) {
          case "unknown":
            return (
              <Badge
                variant={"warning"}
                className="font-mono w-[6em] flex justify-center"
              >
                UNKNOWN
              </Badge>
            )
          case "up":
            return (
              <Badge
                variant={"primary"}
                className="font-mono w-[6em] flex justify-center"
              >
                UP
              </Badge>
            )
          case "down":
            return (
              <Badge
                variant={"error"}
                className="font-mono w-[6em] flex justify-center"
              >
                DOWN
              </Badge>
            )
          case "pending":
            return (
              <Badge
                variant={"info"}
                className="font-mono w-[6em] flex justify-center"
              >
                PENDING
              </Badge>
            )
        }
      },
    }),
    columnHelper.accessor("lastSeen", {
      header: () => <span className="text-sm font-semibold">Last Seen</span>,
      cell: (date) => (
        <span className="text-xs font-mono">
          {formatRelative(new Date(date.getValue()), new Date(Date.now()))}
        </span>
      ),
    }),
  ]
  const data: Worker[] = [
    {
      hostname: "worker-0",
      ip: "135.112.28.32",
      status: "unknown",
      lastSeen: new Date("2024-07-01T01:50:08.575081"),
    },
    {
      hostname: "worker-1",
      ip: "111.93.111.137",
      status: "down",
      lastSeen: new Date("2024-07-10T01:50:08.575103"),
    },
    {
      hostname: "worker-2",
      ip: "66.7.244.91",
      status: "pending",
      lastSeen: new Date("2024-06-30T01:50:08.575110"),
    },
    {
      hostname: "worker-3",
      ip: "177.244.92.176",
      status: "down",
      lastSeen: new Date("2024-07-16T01:50:08.575120"),
    },
    {
      hostname: "worker-4",
      ip: "131.112.36.15",
      status: "down",
      lastSeen: new Date("2024-07-10T01:50:08.575130"),
    },
    {
      hostname: "worker-5",
      ip: "162.236.24.107",
      status: "up",
      lastSeen: new Date("2024-06-30T01:50:08.575140"),
    },
    {
      hostname: "worker-6",
      ip: "223.225.89.11",
      status: "pending",
      lastSeen: new Date("2024-07-10T01:50:08.575163"),
    },
    {
      hostname: "worker-7",
      ip: "200.56.184.145",
      status: "unknown",
      lastSeen: new Date("2024-06-30T01:50:08.575179"),
    },
    {
      hostname: "worker-8",
      ip: "102.207.97.255",
      status: "pending",
      lastSeen: new Date("2024-07-10T01:50:08.575189"),
    },
    {
      hostname: "worker-9",
      ip: "151.185.187.193",
      status: "up",
      lastSeen: new Date("2024-06-23T01:50:08.575199"),
    },
    {
      hostname: "worker-10",
      ip: "22.156.140.95",
      status: "down",
      lastSeen: new Date("2024-06-23T01:50:08.575208"),
    },
    {
      hostname: "worker-11",
      ip: "162.75.107.54",
      status: "pending",
      lastSeen: new Date("2024-07-18T01:50:08.575218"),
    },
    {
      hostname: "worker-12",
      ip: "191.49.119.223",
      status: "pending",
      lastSeen: new Date("2024-07-05T01:50:08.575227"),
    },
    {
      hostname: "worker-13",
      ip: "85.103.177.17",
      status: "pending",
      lastSeen: new Date("2024-06-24T01:50:08.575235"),
    },
    {
      hostname: "worker-14",
      ip: "128.194.174.69",
      status: "pending",
      lastSeen: new Date(Date.now()),
    },
  ]
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <main>
      <header className="border-b p-4 border-base-6 text-sm">some nav</header>
      <section className="p-16">
        <div>
          <div className="text-2xl font-workbench mb-4">Workers</div>
          <div className="border border-base-6 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="border-b border-base-6 bg-base-3 text-base-11">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th key={header.id} className="p-2">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="last:border-none border-b border-base-6 hover:bg-base-2"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="p-2 first:px-4 last:px-4 m-auto"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                {table.getFooterGroups().map((footerGroup) => (
                  <tr key={footerGroup.id}>
                    {footerGroup.headers.map((header) => (
                      <th key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.footer,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </tfoot>
            </table>
          </div>
        </div>
      </section>
    </main>
  )
}
