import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const CourseDetails = () => {
  return (
    <div className="bg-white  w-[80%] mx-auto mt-5">
      <Tabs defaultValue="overview" className="w-[800px]">
        <TabsList className="grid grid-cols-5 rounded-lg w-[800px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="instructor">Instructor</TabsTrigger>
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <p className="text-gray-800  bg-gray-200 p-5 rounded-2xl">
            LearnPress is a comprehensive WordPress LMS Plugin for WordPress.
            This is one of the best WordPress LMS Plugins which can be used to
            easily create & sell courses online...
          </p>
        </TabsContent>
        <TabsContent value="curriculum">
          <p className="text-gray-800  bg-gray-200 p-5 rounded-2xl">
            Course includes quizzes, lessons, and assignments to ensure a great
            learning experience.
          </p>
        </TabsContent>
        <TabsContent value="instructor">
          <p className="text-gray-800  bg-gray-200 p-5 rounded-2xl">
            Meet your instructor: Experienced in online education.
          </p>
        </TabsContent>
        <TabsContent value="faqs">
          <p className="text-gray-800  bg-gray-200 p-5 rounded-2xl">
            Frequently asked questions about this course.
          </p>
        </TabsContent>
        <TabsContent value="reviews">
          <p className="text-gray-800  bg-gray-200 p-5 rounded-2xl">
            Student reviews and feedback.
          </p>
        </TabsContent>
      </Tabs>

      <div className="mt-6 w-[800px]">
        <h3 className="text-lg font-semibold">Leave A Comment</h3>
        <p className="text-sm text-gray-500">
          Your email address will not be published. Required fields are marked *
        </p>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <Input placeholder="Name*" />
          <Input type="email" placeholder="Email*" />
        </div>

        <Textarea placeholder="Comment" className="mt-4" />

        <div className="flex items-center gap-2 mt-2">
          <Checkbox id="save-info" />
          <label htmlFor="save-info" className="text-sm text-gray-600">
            Save my name, email in this browser for next time I comment
          </label>
        </div>

        <Button className="mt-4">Post Comment</Button>
      </div>
    </div>
  );
};

export default CourseDetails;
