export default function About() {
  return (
    <div className="mt-5">
      <h1 className="text-xl font-bold">About me</h1>
      <p className="mt-8">
        Hello, I'm Yagizhan. I am working as a software developer for{" "}
        <a className="underline" href="www.siemens.com">
          Siemens
        </a>
        . I am living in Istanbul, Turkey.
      </p>
      <p className="mt-5">
        I develop things for Siemens since Oct. 2021. Before Siemens I worked
        for{" "}
        <a
          className="underline"
          target="_blank"
          href="https://www.kontrolmatik.com/en/"
        >
          Kontrolmatik Technologies
        </a>{" "}
        as a software engineer around 3,5 years.
      </p>
      <div>
        <h1 className="text-xl font-bold mt-5">Tech Stack</h1>
        <ul className="mt-4 list-disc list-inside leading-9">
          <li>
            Javascript | Typescript | NodeJS | C# | Python | .Net Core | Angular
            | React | Blazor | PostgreSQL | Git | Docker
          </li>
          <li>
            NextJS | NestJS |Asp.Net Core Web API | .Net MAUI | Azure | CI/CD |
            NUnit | Unit Testing | OOP | SOLID
          </li>
          <li>Backend | Frontend | Fullstack | Microservices | Scrum</li>
        </ul>
      </div>
      <h1 className="text-xl font-bold mt-5">More about me</h1>
      <ul className="mt-4 list-disc list-inside leading-9 underline">
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/yagizhanyakali/">
            Linkedin
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/yagizhanNY">
            Github
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/yagizhanNY">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
