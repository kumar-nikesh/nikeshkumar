import fs from "node:fs";
import path from "node:path";

import PDFDocument from "pdfkit";

import {
  contactDetails,
  experiences,
  projects,
  resumeBlocks,
  siteConfig,
  skillCategories,
} from "../src/data/site";

const outputPath = path.resolve(process.cwd(), "public/resume/nikesh-kumar-resume.pdf");
const document = new PDFDocument({
  size: "A4",
  margin: 42,
  info: {
    Title: `${siteConfig.name} Resume`,
    Author: siteConfig.name,
    Subject: "Software architecture, backend engineering, data, and AI experience",
  },
});

fs.mkdirSync(path.dirname(outputPath), { recursive: true });

const output = fs.createWriteStream(outputPath);
document.pipe(output);

const colors = {
  ink: "#172033",
  dark: "#102a43",
  muted: "#526071",
  primary: "#0f766e",
  secondary: "#d97706",
  soft: "#f4f7f8",
  line: "#cbd5e1",
  white: "#ffffff",
};

const contentWidth = document.page.width - document.page.margins.left - document.page.margins.right;
const contentBottom = document.page.height - document.page.margins.bottom - 18;
let pageNumber = 1;

function drawFooter() {
  const footerY = document.page.height - document.page.margins.bottom - 10;

  document.save();
  document.moveTo(document.page.margins.left, footerY - 5).lineTo(document.page.width - document.page.margins.right, footerY - 5).lineWidth(0.5).strokeColor(colors.line).stroke();
  document.font("Helvetica").fontSize(8).fillColor(colors.muted);
  document.text(`${siteConfig.name} | Page ${pageNumber}`, document.page.margins.left, footerY, {
    width: contentWidth,
    align: "center",
  });
  document.restore();
  document.y = document.page.margins.top;
}

document.on("pageAdded", () => {
  pageNumber += 1;
  drawFooter();
});

function drawFirstPageHeader() {
  const headerHeight = 132;

  document.save();
  document.rect(0, 0, document.page.width, headerHeight).fill(colors.dark);
  document.rect(0, headerHeight - 5, document.page.width, 5).fill(colors.secondary);
  document.font("Helvetica-Bold").fontSize(26).fillColor(colors.white).text(siteConfig.name, document.page.margins.left, 34, {
    width: contentWidth,
  });
  document.font("Helvetica").fontSize(12.5).fillColor("#b8e0dc").text("Lead Engineer | Software Architect | Data & AI Engineer", document.page.margins.left, 70, {
    width: contentWidth,
  });
  document.font("Helvetica").fontSize(8.6).fillColor(colors.white).text(`${contactDetails.email}  |  ${contactDetails.phone}`, document.page.margins.left, 99, {
    width: contentWidth,
  });
  document.text(`${contactDetails.websiteUrl}  |  ${contactDetails.linkedinUrl}`, document.page.margins.left, 113, {
    width: contentWidth,
  });
  document.restore();
  document.y = headerHeight + 20;
}

function ensureSpace(height: number) {
  if (document.y + height > contentBottom) {
    document.addPage();
  }
}

function addSectionTitle(title: string) {
  ensureSpace(34);
  document.y += 8;
  const startY = document.y;
  document.roundedRect(document.page.margins.left, startY + 2, 4, 12, 2).fill(colors.primary);
  document.font("Helvetica-Bold").fontSize(11.5).fillColor(colors.primary).text(title.toUpperCase(), document.page.margins.left + 12, startY, {
    width: contentWidth - 12,
    characterSpacing: 0.7,
  });
  const lineY = document.y + 3;
  document.moveTo(document.page.margins.left, lineY).lineTo(document.page.width - document.page.margins.right, lineY).lineWidth(0.6).strokeColor(colors.line).stroke();
  document.y = lineY + 8;
}

function addParagraph(text: string, fontSize = 9.5, color = colors.ink, x = document.page.margins.left, width = contentWidth) {
  document.font("Helvetica").fontSize(fontSize).fillColor(color);
  const height = document.heightOfString(text, { width, lineGap: 2.2 });
  ensureSpace(height + 4);
  document.text(text, x, document.y, { width, lineGap: 2.2 });
}

function addSummaryCard(text: string) {
  document.font("Helvetica").fontSize(9.7).fillColor(colors.ink);
  const textWidth = contentWidth - 28;
  const height = document.heightOfString(text, { width: textWidth, lineGap: 2.4 });
  ensureSpace(height + 26);
  const startY = document.y;
  document.roundedRect(document.page.margins.left, startY, contentWidth, height + 18, 7).fill(colors.soft);
  document.rect(document.page.margins.left, startY, 4, height + 18).fill(colors.primary);
  document.text(text, document.page.margins.left + 14, startY + 9, { width: textWidth, lineGap: 2.4 });
  document.y = startY + height + 27;
}

function addBullet(text: string, x = document.page.margins.left, width = contentWidth) {
  const bulletTextWidth = width - 14;
  document.font("Helvetica").fontSize(9).fillColor(colors.ink);
  const height = document.heightOfString(text, { width: bulletTextWidth, lineGap: 1.5 });
  ensureSpace(height + 3);
  const startY = document.y;
  document.circle(x + 3, startY + 5, 1.5).fill(colors.secondary);
  document.text(text, x + 14, startY, { width: bulletTextWidth, lineGap: 1.5 });
}

function addEntryTitle(title: string, meta?: string) {
  ensureSpace(32);
  const titleWidth = meta ? Math.floor(contentWidth * 0.68) : contentWidth;
  const metaWidth = contentWidth - titleWidth;
  document.font("Helvetica-Bold").fontSize(10.5).fillColor(colors.ink);
  const titleHeight = document.heightOfString(title, { width: titleWidth });
  document.font("Helvetica").fontSize(8.5).fillColor(colors.muted);
  const metaHeight = meta ? document.heightOfString(meta, { width: metaWidth, align: "right" }) : 0;
  ensureSpace(Math.max(titleHeight, metaHeight) + 8);
  const startY = document.y;
  document.font("Helvetica-Bold").fontSize(10.5).fillColor(colors.ink).text(title, document.page.margins.left, startY, {
    width: titleWidth,
  });
  if (meta) {
    document.font("Helvetica").fontSize(8.5).fillColor(colors.muted).text(meta, document.page.margins.left + titleWidth, startY, {
      width: metaWidth,
      align: "right",
    });
  }
  document.y = startY + Math.max(titleHeight, metaHeight) + 5;
}

function addExperienceEntry(experience: (typeof experiences)[number]) {
  const dateWidth = 126;
  const headerGap = 16;
  const titleWidth = contentWidth - dateWidth - headerGap;
  const bodyX = document.page.margins.left;
  const bodyWidth = contentWidth;
  const roleTitle = experience.role;
  const companyTitle = experience.company;
  const stackText = `STACK  ${experience.technologies.join(", ")}`;

  document.font("Helvetica-Bold").fontSize(10.5);
  const roleHeight = document.heightOfString(roleTitle, { width: titleWidth });
  document.font("Helvetica").fontSize(8.8);
  const companyHeight = document.heightOfString(companyTitle, { width: titleWidth });
  document.font("Helvetica").fontSize(8.5);
  const dateHeight = document.heightOfString(experience.duration, { width: dateWidth, lineGap: 2 });
  document.font("Helvetica").fontSize(8.8);
  const descriptionHeight = document.heightOfString(experience.description, { width: bodyWidth, lineGap: 2.2 });
  document.font("Helvetica").fontSize(9);
  const responsibilityHeights = experience.responsibilities.map((item) =>
    document.heightOfString(item, { width: bodyWidth - 14, lineGap: 1.5 }),
  );
  document.font("Helvetica").fontSize(8);
  const stackHeight = document.heightOfString(stackText, { width: bodyWidth, lineGap: 2.2 });
  const headerHeight = roleHeight + companyHeight + 5;
  const bodyHeight =
    Math.max(dateHeight, headerHeight) +
    9 +
    descriptionHeight +
    4 +
    responsibilityHeights.reduce((total, height) => total + height + 3, 0) +
    stackHeight +
    12;

  ensureSpace(bodyHeight + 16);
  const startY = document.y;

  document.font("Helvetica-Bold").fontSize(10.5).fillColor(colors.ink).text(roleTitle, bodyX, startY, {
    width: titleWidth,
  });
  document.font("Helvetica").fontSize(8.8).fillColor(colors.primary).text(companyTitle, bodyX, startY + roleHeight + 2, {
    width: titleWidth,
  });
  document.font("Helvetica").fontSize(8.5).fillColor(colors.muted).text(experience.duration, document.page.margins.left + titleWidth + headerGap, startY, {
    width: dateWidth,
    align: "right",
    lineGap: 2,
  });

  document.y = startY + Math.max(dateHeight, headerHeight) + 7;
  addParagraph(experience.description, 8.8, colors.muted, bodyX, bodyWidth);
  for (const responsibility of experience.responsibilities) {
    addBullet(responsibility, bodyX, bodyWidth);
  }
  addParagraph(stackText, 8, colors.primary, bodyX, bodyWidth);

  const endY = document.y;
  document.save();
  document.moveTo(document.page.margins.left, endY + 5).lineTo(document.page.width - document.page.margins.right, endY + 5).lineWidth(0.6).strokeColor(colors.line).stroke();
  document.restore();
  document.y = endY + 14;
}

function addSkillGrid() {
  const gap = 14;
  const columnWidth = (contentWidth - gap) / 2;

  for (let index = 0; index < skillCategories.length; index += 2) {
    const row = skillCategories.slice(index, index + 2);
    const rowHeight = Math.max(
      ...row.map((category) => {
        document.font("Helvetica-Bold").fontSize(8.5);
        const titleHeight = document.heightOfString(category.title.toUpperCase(), { width: columnWidth - 20 });
        document.font("Helvetica").fontSize(8.4);
        const skillsHeight = document.heightOfString(category.skills.join(", "), { width: columnWidth - 20, lineGap: 1.2 });
        return titleHeight + skillsHeight + 26;
      }),
      52,
    );
    ensureSpace(rowHeight + 8);
    const startY = document.y;

    row.forEach((category, columnIndex) => {
      const startX = document.page.margins.left + columnIndex * (columnWidth + gap);
      document.roundedRect(startX, startY, columnWidth, rowHeight, 6).fill(colors.soft);
      document.font("Helvetica-Bold").fontSize(8.5).fillColor(colors.primary).text(category.title.toUpperCase(), startX + 10, startY + 9, {
        width: columnWidth - 20,
      });
      document.font("Helvetica").fontSize(8.4).fillColor(colors.muted).text(category.skills.join(", "), startX + 10, startY + 23, {
        width: columnWidth - 20,
        lineGap: 1.2,
      });
    });

    document.y = startY + rowHeight + 10;
  }
}

drawFooter();
drawFirstPageHeader();

addSectionTitle("Profile");
const summary = resumeBlocks.find((block) => block.title === "Professional summary")?.items.join(" ") ?? siteConfig.description;
addSummaryCard(summary);

addSectionTitle("Core expertise");
addSkillGrid();

addSectionTitle("Professional experience");
for (const experience of experiences) {
  addExperienceEntry(experience);
}

addSectionTitle("Selected projects");
const selectedProjects = projects.filter((project) => project.featured || ["Atellica Solution", "SoMove"].includes(project.name));
for (const project of selectedProjects) {
  ensureSpace(76);
  addEntryTitle(`${project.name} | ${project.tagline}`);
  addParagraph(project.description, 9.1, colors.muted);
  addParagraph(`ARCHITECTURE  ${project.architecture}`, 8.6, colors.primary);
  for (const contribution of project.contributions.slice(0, 2)) {
    addBullet(contribution);
  }
  addParagraph(`STACK  ${project.technologies.join(", ")}`, 8.1, colors.primary);
  document.y += 8;
}

async function finishDocument() {
  document.end();

  await new Promise<void>((resolve, reject) => {
    output.once("finish", resolve);
    output.once("error", reject);
  });

  console.log(`Generated ${outputPath}`);
}

void finishDocument();