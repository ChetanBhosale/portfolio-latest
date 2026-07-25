import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const runtime = "nodejs"
export const dynamic = "force-static"

export async function GET() {
  const resumePath = join(
    process.cwd(),
    "public",
    "resume",
    "chetan-bhosale-resume.pdf"
  )
  const resume = await readFile(resumePath)

  return new Response(new Uint8Array(resume), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Chetan-Bhosale-Resume.pdf"',
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
