export const ProjectTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2 mb-4">
    {tags.map((tag, index) => (
      <span
        key={index}
        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary"
      >
        {tag}
      </span>
    ))}
  </div>
);
