"use client"

import { motion } from "framer-motion"

type OrgNode = {
  role: string
  children?: OrgNode[]
}

function NodeCard({ role, delay = 0 }: { role: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay }}
      className="group relative"
    >
      <div className="rounded-xl border border-border bg-card px-5 py-3 text-center text-sm font-semibold shadow-card transition hover:-translate-y-0.5 hover:shadow-lg">
        {role}
      </div>
    </motion.div>
  )
}

function VerticalLine() {
  return (
    <div className="mx-auto h-8 w-px bg-gradient-to-b from-primary/60 to-primary/20" />
  )
}

function HorizontalConnector() {
  return <div className="hidden h-px flex-1 bg-primary/30 lg:block" />
}

export function OrgChart({ data }: { data: OrgNode }) {
  return (
    <div className="flex flex-col items-center">
      {/* Director */}
      <NodeCard role={data.role} />

      {data.children && data.children.length > 0 && (
        <>
          <VerticalLine />

          {/* Medical Superintendent */}
          <NodeCard role={data.children[0].role} delay={0.1} />

          {data.children[0].children && (
            <>
              <VerticalLine />

              {/* Branch connector line */}
              <div className="hidden w-full max-w-xl items-center lg:flex">
                <div className="flex-1" />
                <div className="h-px w-full bg-primary/30" />
                <div className="flex-1" />
              </div>

              {/* Two branches */}
              <div className="mt-2 grid w-full max-w-3xl grid-cols-1 gap-8 lg:grid-cols-2">
                {data.children[0].children.map((branch, bi) => (
                  <div key={bi} className="flex flex-col items-center gap-0">
                    {/* Branch head */}
                    <NodeCard role={branch.role} delay={0.2 + bi * 0.05} />

                    {branch.children &&
                      branch.children.map((child, ci) => (
                        <div key={ci} className="flex flex-col items-center">
                          <VerticalLine />
                          <NodeCard
                            role={child.role}
                            delay={0.3 + bi * 0.05 + ci * 0.05}
                          />
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}
