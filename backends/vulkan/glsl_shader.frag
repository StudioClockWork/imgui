#version 450 core
#extension GL_EXT_nonuniform_qualifier : enable

layout(location = 0) out vec4 fColor;

layout(set=0, binding=2) uniform sampler2D uTexture2DRegister[];

layout(push_constant) uniform uPushConstant {
    vec2 uScale;
    vec2 uTranslate;
    uint texID;
} pc;

layout(location = 0) in struct {
    vec4 Color;
    vec2 UV;
} In;

void main()
{
    fColor = In.Color ;//* texture(uTexture2DRegister[pc.texID], In.UV.st);
}
