export default function() {
  return [
    {
      title: "Classroom Overview",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">1</i>',
      htmlAfter: ""
    },
    {
      title: "Change Modes",
      htmlBefore: '<i class="material-icons">2</i>',
      to: "/blog-posts",
    },
    {
      title: "Add New Question",
      htmlBefore: '<i class="material-icons">3</i>',
      to: "/add-new-post",
    },
    {
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "Student Profiles",
      htmlBefore: '<i class="material-icons">4</i>',
      to: "/tables",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "Errors",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
